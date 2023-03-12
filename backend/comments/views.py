from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import CommentSerializer
from . models import Comment
from replies.serializers import ReplySerializer
from replies.models import Reply

# Create your views here.
@api_view(['GET', 'POST']) # Get all/Add new comments without user login
@permission_classes([AllowAny])
def all_comments(request):
    if request.method == 'GET':
        all_comments = Comment.objects.all()
        serializer = CommentSerializer(all_comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET']) # Get all comments for a specific video without user login
@permission_classes([AllowAny])
def video_comments(request):
#     comments = Comment.objects.filter(video_id=request.video_id)
#     serializer = CommentSerializer(comments, many=True)
#     return Response(serializer.data)
    comments = Comment.objects.all()
    # video_id = VideoId.objects.all()
    search_param = request.query_param.get('video_id')

    if search_param:
        comments = Comment.objects.filter(video_id__id=search_param)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)




@api_view(['GET', 'POST']) # Get all/add new comment after user logged in
@permission_classes([IsAuthenticated])
def user_comment(request):
    # print(
    #     'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE']) # Get/Update/Delete ONE specific comment after user logged in
@permission_classes([IsAuthenticated])
def comment_id(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# @api_view(["Patch"])
# def like_comment(request, pk):
#     comment = get_object_or_404(Comment, pk=pk)
#     comment.likes += 1
#     serializer = CommentSerializer(comment, data=request.data, partial=True)
#     serializer.is_valid(raise_exception=True)
#     serializer.save()
#     return Response(serializer.data)