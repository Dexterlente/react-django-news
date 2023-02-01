from django.urls import path
from . import views

urlpatterns = [

    path('articles/', views.article_list, name='articles'),
    path('articles/<str:pk>', views.article_detail, name='article'),
]