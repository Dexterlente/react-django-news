from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('profile/', views.profile, name='profile'),
    path('articles/', views.article_list, name='articles'),
    path('articles/<str:pk>', views.article_detail, name='article'),
    path('posts/', views.article_list, name='posts'),
    path('posts/<str:pk>', views.article_detail, name='post'),
]