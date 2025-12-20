from django.contrib import admin
from .models import Company, Feature, Benefit, Testimonial, TeamMember


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'tagline', 'phone', 'email')


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ('title', 'company')


@admin.register(Benefit)
class BenefitAdmin(admin.ModelAdmin):
    list_display = ('title', 'company')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'company_name', 'company')


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'company')
