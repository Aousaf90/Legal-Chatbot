from pydantic import BaseModel, Field


class ProjectModel(BaseModel):
    """
    Data model for a project, including fields for the project's name, description,
    and subcategory. Validates input data with constraints on length and content.
    """

    name: str = Field(..., title="Project Name", min_length=1, max_length=100)
    information: str = Field(
        ..., title="Project Description", min_length=1, max_length=1000
    )
    subcategory: str = Field(
        ..., title="Project Subcategory", min_length=1, max_length=100
    )
