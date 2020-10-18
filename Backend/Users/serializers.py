from rest_framework import serializers
from .models import *

'''
class StockUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('user','stock_name','base_price')
'''

# User Serializer


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name',
                  'nationality', 'gender',  'email')

# Register Serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name',
                  'nationality', 'gender', 'email')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], email=validated_data['email'], password=validated_data['password'], first_name=validated_data['first_name'],
                                        last_name=validated_data['last_name'], nationality=validated_data['nationality'], gender=validated_data['gender'], )
        return user


'''        
        user.first_name = validated_data['first_name']
        user.last_name = validated_data['last_name']
        user.nationality = validated_data['nationality']
        user.gender = validated_data['gender']
        user.institute = validated_data['institute']
'''
