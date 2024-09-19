from schema.authSchema import LoginModel, UserProfileModel
from models.userModel import User as UserBaseModel, UserToken, UserProfile
from fastapi import Depends, HTTPException
from db import get_db, Session
from fastapi import APIRouter
from .authHelper import generate_token, verify_passwod

auth_url = APIRouter()


@auth_url.post("/login")
def login(User: LoginModel, db: Session = Depends(get_db)):
    """
    Authenticate a user by verifying their credentials. If valid, generate and return
    a token along with user details. Store the token in the database.
    Raise an exception if authentication fails or an error occurs.
    """
    try:
        active_user = (
            db.query(UserBaseModel).filter(UserBaseModel.email == User.email).first()
        )
        if active_user and verify_passwod(
            plain_password=User.password, hashed_password=active_user.hashed_password
        ):
            token = generate_token(active_user)
            token_db = UserToken(user_id=active_user.id, token=token)
            db.add(token_db)
            db.commit()
            db.refresh(token_db)
            return {
                "token": token,
                "user": {
                    "email": active_user.email,
                    "name": active_user.name,
                    "id": active_user.id,
                },
            }
        else:
            raise HTTPException(
                status_code=200, detail="No user found with given credentials"
            )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@auth_url.post("set-profile-params")
def set_profile_params():
    pass


@auth_url.get("/get-profile-params/{user_id}")
def get_profile_params(user_id, db: Session = Depends(get_db)):
    try:
        user_parms = (
            db.query(UserProfile).filter(UserProfile.user_id == user_id).first()
        )
        if user_parms is None:
            raise HTTPException(
                status_code=404, detail="No profile parameters found for the given user"
            )
        else:
            return {
                "id": user_parms.id,
                "user_id": user_parms.user_id,
                "openai_key": user_parms.openai_key,
                "openai_model": user_parms.openai_model,
                "prompt": user_parms.prompt,
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@auth_url.post("/set-profile-params/{user_id}")
def set_profile_params(
    user_id: int, profile_data: UserProfileModel, db: Session = Depends(get_db)
):
    try:
        user_profile = (
            db.query(UserProfile).filter(UserProfile.user_id == user_id).first()
        )
        if user_profile:
            user_profile.openai_key = profile_data.openai_key
            user_profile.openai_model = profile_data.openai_model
            user_profile.prompt = profile_data.prompt
        else:
            new_profile = UserProfile(
                user_id=user_id,
                openai_key=profile_data.openai_key,
                openai_model=profile_data.openai_model,
                prompt=profile_data.prompt,
            )
            db.add(new_profile)
        db.commit()
        return {"status": "success", "message": "Profile parameters set successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
