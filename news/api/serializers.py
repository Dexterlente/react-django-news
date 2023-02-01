from rest_framework.serializers import ModelSerializer
from .models import User, Profile, Article, Post

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'