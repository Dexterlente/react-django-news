from django.shortcuts import render
from .models import User, Profile, Article, Post
from django.http import HttpRequest
#rest
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from django.contrib.auth import authenticate, logout, login
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from rest_framework import generics, status, serializers
from rest_framework.request import Request as DRFRequest
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
# from rest_framework.authentication import SessionAuthentication
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.contrib.sessions.models import Session
#from rest_framework.permissions import BasePermission

from .serializers import UserSerializer, LoginSerializer, ProfileSerializer, ArticleSerializer, PostSerializer, LogoutSerializer
from django.middleware.csrf import get_token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import TokenAuthentication




# class LoginAPIView(APIView):
#     serializer_class = LoginSerializer

#     def post(self, request):
#         if request.user.is_authenticated:
#             return Response({'error': 'User is already authenticated.'}, status=status.HTTP_400_BAD_REQUEST)

#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             username = serializer.data['username']
#             password = serializer.data['password']
#             user = authenticate(request, username=username, password=password)
#             if user is not None:
#                 login(request, user)
#                 sessionid = request.session.session_key  # get session key
#                 get_token(request)
#                 return Response({'sessionid': sessionid, 'success': 'Logged in successfully'})
#             else:
#                 return Response({'error': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# # may sakit nanaman
# class LogoutView(APIView):
#     serializer_class = LogoutSerializer
#     authentication_classes = [SessionAuthentication]

#     def post(self, request, format=None):
#         session_id = request.data.get('sessionid')
#         if session_id:
#             Session.objects.filter(session_key=session_id).delete()
#             logout(request)
#         return Response(status=status.HTTP_204_NO_CONTENT)
# @api_view(["POST"])
# @permission_classes([AllowAny])
# def register(request):
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         user = serializer.save()
#         token = Token.objects.create(user=user)
#         return Response({'message': 'Successfully registered', 'token': token.key})
#     else:
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(ObtainAuthToken):
    def post(self, request):
        if request.user.is_authenticated:
            return Response({'error': 'User is already authenticated.'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'success': 'Logged in successfully'})
        else:
            return Response({'error': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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

class article_list(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by('-time_created')
    serializer_class = ArticleSerializer
    authentication_classes =  [TokenAuthentication] 
    
    def get_permissions(self):
        permission_classes = []
        if self.request.method == 'GET':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]
    
    # def get_permissions(self):
    #     if self.request.method == 'POST':
    #         return [IsAuthenticated(),]
    #     return [AllowAny(),]


class article_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'
    authentication_classes =  [TokenAuthentication] 

    def get_permissions(self):
        permission_classes = []
        if self.request.method == 'GET':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]
    

# @method_decorator(csrf_exempt, name='dispatch')
class post_list(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-time_created_post')
    serializer_class = PostSerializer
    authentication_classes =  [TokenAuthentication] 

    def get_permissions(self):
        permission_classes = []
        # if self.request.method != 'GET':
        #     permission_classes = [IsAuthenticated]
        if self.request.method == 'GET':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]
        
    # permission_classes = [AllowAny]
    # authentication_classes = [SessionAuthentication]

    # def get_permissions(self):
    #     if self.request.method == 'POST':
    #         return [IsAuthenticated(),]
    #     return [AllowAny(),]


class post_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    authentication_classes =  [TokenAuthentication] 
    # permission_classes = [AllowAny]
    def get_permissions(self):
        permission_classes = []
        if self.request.method == 'GET':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]
    

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    try:
        profile = Profile.objects.get(user=request.user)
        return Response(ProfileSerializer(profile).data)
    except Profile.DoesNotExist:
        return Response({'error': 'Profile does not exist'}, status=status.HTTP_404_NOT_FOUND)
