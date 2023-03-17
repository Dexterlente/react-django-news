from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
import uuid
from django.conf import settings
from django.utils import timezone

# Create your models here.

class User (AbstractUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.CharField(max_length=1000)
    profile_content = models.TextField()

    def __str__(self):
        return self.user
    

"""    def serialize(self,user):
        return {
            "profile_id": self.user.id,
            "profile_username": self.user.username,
            "profile_name": f"{self.user.first_name} {self.user.last_name}",
            "profile_image": self.user.profile_image,
            "profile_content": self.user.profile_content,
        }"""



class Article(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=60)
    content = models.TextField()
    image = models.CharField(max_length=1000)
    time_created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_article")
    archived = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    
""" def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "image": self.image,
            "time_created": self.time_created.strftime("%b %#d, %Y"),
            "author": f"{self.author.first_name} {self.author.last_name}",
            "archived": self.archived
        }
        
        def __str__(self):
            return self.title"""


class Post(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    title_post = models.CharField(max_length=60)
    content_post = models.TextField()
    image_post = models.CharField(max_length=1000)
    time_created_post = models.DateTimeField(auto_now_add=True)
    author_post = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_post")
    archived_post = models.BooleanField(default=False)

    def __str__(self):
        return self.title_post
    

    """def serialize(self):
        return{
            "id": self.id,
            "title_post": self.title_post,
            "content_post": self.content_post,
            "image_post": self.image_post,
            "time_created_post": self.time_created_post.strftime("%b %#d, %Y"),
            "author_post": f"{self.author_post.first_name} {self.author_post.last_name}",
        }"""

class Token(models.Model):
    key = models.CharField(max_length=40, primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='auth_tokens', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    timeout = models.DurationField(default=timezone.timedelta(days=1))