from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.urls import reverse

from .models import Company
from .serializers import CompanySerializer


class CompanyListView(generics.ListAPIView):
    """List View – returns all Company objects."""

    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailView(generics.RetrieveAPIView):
    """Detail View – returns a specific Company object."""

    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'pk'


class ApiRoutesView(APIView):
    """API Routes View – returns a list of all available API endpoints."""

    def get(self, request, *args, **kwargs):
        routes = {
            'companies_list': request.build_absolute_uri(reverse('company-list')),
            'company_detail_example': request.build_absolute_uri(
                reverse('company-detail', kwargs={'pk': 1})
            ),
            'api_routes': request.build_absolute_uri(reverse('api-routes')),
        }
        return Response(routes)
