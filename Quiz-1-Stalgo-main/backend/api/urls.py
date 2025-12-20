from django.urls import path

from .views import ApiRoutesView, CompanyListView, CompanyDetailView

urlpatterns = [
    # API Routes View – lists endpoints
    path('', ApiRoutesView.as_view(), name='api-routes'),

    # List and Detail Views for Company
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
]
