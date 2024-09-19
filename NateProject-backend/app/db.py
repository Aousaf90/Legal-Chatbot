from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base
import dotenv
import os

dotenv.load_dotenv()
USERNAME = os.environ["USERNAME"]
DATABASE_PASSWORD = os.environ["DATABASE_PASSWORD"]
HOST = os.environ["HOST"]
PORT = os.environ["PORT"]
DATABASE_NAME = os.environ["DATABASE_NAME"]

# DATABASE_URL = f"postgresql://{USERNAME}:{DATABASE_PASSWORD}@{HOST}:{PORT}/{DATABASE_NAME}"
# DATABASE_URL = f"postgresql://postgres:123456789@localhost:5432/NateProject"
DATABASE_URL = "postgresql://admin:hqJv5A4DX0sZy70Sbj0oTYhOIbScpPX4@zh0e0p.stackhero-network.com:6723/admin?sslmode=require"
engine = create_engine(url=DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

Base.metadata.create_all(bind=engine)


def get_db():
    """
    Dependency that provides a database session. Yields a database session object
    and ensures that the session is closed after use.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
