from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.all_comments),
    path('<str:video_id>/', views.video_comments)
]