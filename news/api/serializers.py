from rest_framework.serializers import ModelSerializer
from .models import User, Profile, Article, Post
from rest_framework import serializers

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ArticleSerializer(ModelSerializer):
    author = UserSerializer(read_only=True)
    id = serializers.UUIDField(format='hex', read_only=True)

    class Meta:
        model = Article
        fields = '__all__'

class PostSerializer(ModelSerializer):
    author_post = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'