from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.parsers import JSONParser,ParseError
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAuthenticated
from . serializers import UserSerializer, UserRegisterSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    UserModel View.
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()


@api_view(["POST"])
def register(request):
    
    data = JSONParser().parse(request)
    
    user_serialize = UserRegisterSerializer(data=data)
    if user_serialize.is_valid():
        
        # data['password'] = make_password(data['password'])
        user = user_serialize.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
    
    return Response(user_serialize.errors, status=status.HTTP_400_BAD_REQUEST)
