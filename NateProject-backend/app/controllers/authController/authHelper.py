from passlib.context import CryptContext
import datetime
import dotenv
import os
import jwt


dotenv.load_dotenv()
SECRET_KEY = os.environ["SECRET_KEY"]
ALROGITHM = os.environ["ALGORITHM"]


def generate_token(user):
    """
    Generate a JWT token for the given user, including their ID, email, and expiration time
    in the payload.
    """
    payload = {"id": user.id, "email": user.email, "exp": datetime.datetime.now()}
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALROGITHM)
    return token


def verify_passwod(plain_password: str, hashed_password: str) -> bool:
    """
    Verify a plain password against its hashed counterpart using the specified
    hashing schemes (argon2, bcrypt).
    """
    context = CryptContext(schemes=["argon2", "bcrypt"])
    return context.verify(plain_password, hashed_password)
