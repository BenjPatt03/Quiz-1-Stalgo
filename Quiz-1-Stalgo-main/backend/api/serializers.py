from rest_framework import serializers
from .models import Company, MessagingChannel, Feature, Benefit, Testimonial, TeamMember


class MessagingChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessagingChannel
        fields = ['id', 'name']


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ['id', 'title', 'description', 'icon']


class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = ['id', 'title', 'description', 'image']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'company_name', 'text', 'rating']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'bio', 'image']


class CompanySerializer(serializers.ModelSerializer):
    messaging_channels = MessagingChannelSerializer(many=True, read_only=True)
    features = FeatureSerializer(many=True, read_only=True)
    benefits = BenefitSerializer(many=True, read_only=True)
    testimonials = TestimonialSerializer(many=True, read_only=True)
    team_members = TeamMemberSerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = [
            'id',
            'name',
            'short_name',
            'tagline',
            'address',
            'phone',
            'email',
            'sunday_hours',
            'weekday_hours',
            'saturday_hours',
            'messaging_channels',
            'features',
            'benefits',
            'testimonials',
            'team_members',
        ]
