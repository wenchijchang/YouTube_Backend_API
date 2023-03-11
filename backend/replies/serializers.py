from rest_framework import serializers
from .models import Reply


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ["id", "user", "comment", "text"]
        depth = 1