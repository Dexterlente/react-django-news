from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.views import APIView


urlpatterns = [
    path('api/get_csrf_token/', views.GetCSRFToken.as_view(), name='get_csrf_token'),
    path('register/', views.register, name='register'),
    path('login/', views.LoginAPIView.as_view(), name='login'),
    # path('api-token-auth/', obtain_auth_token, name='api_token_auth'), # optional, for obtaining token using username and password
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('profile/', views.profile, name='profile'),
    path('articles/', views.article_list.as_view(), name='article-list'),
    path('articles/<uuid:id>/', views.article_detail.as_view(), name='article-detail'),
    path('posts/', views.post_list.as_view(), name='post-list'),
    path('posts/<uuid:id>/', views.post_detail.as_view(), name='post-detail'),
]