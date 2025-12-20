from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=255)
    address = models.TextField()
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    sunday_hours = models.CharField(max_length=100, blank=True)
    weekday_hours = models.CharField(max_length=100, blank=True)
    saturday_hours = models.CharField(max_length=100, blank=True)

    def __str__(self) -> str:
        return self.short_name or self.name


class MessagingChannel(models.Model):
    company = models.ForeignKey(Company, related_name='messaging_channels', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.company.short_name} - {self.name}"


class Feature(models.Model):
    company = models.ForeignKey(Company, related_name='features', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)

    def __str__(self) -> str:
        return self.title


class Benefit(models.Model):
    company = models.ForeignKey(Company, related_name='benefits', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.CharField(max_length=255, blank=True)

    def __str__(self) -> str:
        return self.title


class Testimonial(models.Model):
    company = models.ForeignKey(Company, related_name='testimonials', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=255)
    text = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)

    def __str__(self) -> str:
        return f"{self.name} - {self.company_name}"


class TeamMember(models.Model):
    company = models.ForeignKey(Company, related_name='team_members', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.CharField(max_length=255, blank=True)

    def __str__(self) -> str:
        return f"{self.name} ({self.position})"
