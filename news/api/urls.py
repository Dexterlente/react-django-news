from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('profile/', views.profile, name='profile'),
    # path('articles/', views.article_list, name='articles'),
    # path('articles/<str:pk>', views.article_detail, name='article'),
    path('articles/', views.article_list.as_view(), name='article-list'),
    path('articles/<uuid:id>/', views.article_detail.as_view(), name='article-detail'),
    # path('posts/', views.post_list, name='posts'),
    # path('posts/<str:pk>', views.post_detail, name='post'),
    path('posts/', views.post_list.as_view(), name='post-list'),
    path('posts/<uuid:id>/', views.post_detail.as_view(), name='post-detail'),
]