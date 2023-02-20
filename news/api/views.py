from django.shortcuts import render
from .models import User, Profile, Article, Post
from django.http import HttpRequest
#rest
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.contrib.auth import authenticate, logout, login
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from rest_framework import generics, status, serializers
from rest_framework.request import Request as DRFRequest
from rest_framework.views import APIView

from .serializers import UserSerializer, LoginSerializer, ProfileSerializer, ArticleSerializer, PostSerializer, LogoutSerializer
# Create your views here.


# @api_view(["POST"])
# @permission_classes([AllowAny])
# def login(request):
#     username = request.data.get("username")
#     password = request.data.get("password")
#     if username is None or password is None:
#         return Response({'error': 'Please provide both username and password'},
#                         status=status.HTTP_400_BAD_REQUEST)
#     user = authenticate(username=username, password=password)
#     if not user:
#         return Response({'error': 'Invalid Credentials'},
#                         status=status.HTTP_404_NOT_FOUND)
#     login(request, user)
#     return Response(UserSerializer(user).data)

# @api_view(["POST"])
# @permission_classes([AllowAny])
# def login(request: DRFRequest):
#     serializer = LoginSerializer(data=request.data)
#     if serializer.is_valid():
#         user = serializer.validated_data
#         if user is not None:
#             django_login(request._request, user)
#             return Response(UserSerializer(user).data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LoginAPIView(APIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data['username']
            password = serializer.data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return Response({'success': 'Logged in successfully'})
            else:
                return Response({'error': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout(request):
    serializer = LogoutSerializer(data=request.data)
    if serializer.is_valid():
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.create(user=user)
        return Response({'message': 'Successfully registered', 'token': token.key})
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# def article_list(request):
#     articles = Article.objects.all().order_by('-time_created')
#     serializer = ArticleSerializer(articles, many=True)
#     return Response(serializer.data)

class article_list(generics.ListAPIView):
    queryset = Article.objects.all().order_by('-time_created')
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]


class article_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]

class post_list(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-time_created_post')
    serializer_class = PostSerializer
    permission_classes = [AllowAny]


class post_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]
    
# def article_detail(request, pk):
#     article = Article.objects.get(pk=pk)
#     serializer = ArticleSerializer(article)
#     return Response(serializer.data)
"""@api_view(['GET'])
@permission_classes([AllowAny])
def article_detail(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return Response({'error': 'Article not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)"""

"""@api_view(['GET'])
def post_list(request):
    posts = Post.objects.all().order_by('-time_created_post')
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)"""

# @api_view(['GET'])
# @permission_classes([AllowAny])
# def post_detail(request, pk):
#     post = Post.objects.get(pk=pk)
#     serializer = PostSerializer(post)
#     return Response(serializer.data)



"""@api_view(['GET'])
@permission_classes([AllowAny])
def post_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response({'error': 'Article not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = PostSerializer(post)
    return Response(serializer.data)"""

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    try:
        profile = Profile.objects.get(user=request.user)
        return Response(ProfileSerializer(profile).data)
    except Profile.DoesNotExist:
        return Response({'error': 'Profile does not exist'}, status=status.HTTP_404_NOT_FOUND)
