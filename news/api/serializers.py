from rest_framework.serializers import ModelSerializer
from .models import User, Profile, Article, Post
from rest_framework import serializers
from django.contrib.auth import authenticate

class UserSerializer(ModelSerializer):
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm', 'first_name', 'last_name']

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')
        if password != password_confirm:
            raise serializers.ValidationError({'password': 'Passwords do not match'})
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        return user

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ArticleSerializer(ModelSerializer):
    author = UserSerializer(read_only=True)
    # id = serializers.UUIDField(format='hex', read_only=True)

    class Meta:
        model = Article
        fields = '__all__'

class PostSerializer(ModelSerializer):
    author_post = UserSerializer(read_only=True)
    # id = serializers.UUIDField(format='hex', read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

