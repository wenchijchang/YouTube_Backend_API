from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.all_comments),
    path('by_vid_id/', views.video_comments),
    path('<str:user_id>/', views.user_comment),
    path('<int:pk>/', views.comment_id)
]