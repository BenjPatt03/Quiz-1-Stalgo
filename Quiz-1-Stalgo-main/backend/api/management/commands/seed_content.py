from django.core.management.base import BaseCommand

from api.models import (
    Company,
    MessagingChannel,
    Feature,
    Benefit,
    Testimonial,
    TeamMember,
)


class Command(BaseCommand):
    help = "Seed the database with default PhilPaint content matching the frontend Quiz 1 data."

    def handle(self, *args, **options):
        self.stdout.write(self.style.MIGRATE_HEADING("Seeding PhilPaint content..."))

        company_info = {
            "name": "Philippine Paint Manufacturers Inc.",
            "short_name": "PhilPaint",
            "tagline": "Trusted Paint Solutions for Industrial Excellence",
            "address": "Gov. Pascual Avenue, Northern Hills, Malabon City, 1470, Metro Manila, Philippines",
            "phone": "02-362-06**",
            "email": "info@philpaint.com",
            "sunday_hours": "Closed",
            "weekday_hours": "08:00 AM - 05:00 PM",
            "saturday_hours": "Closed",
        }

        company, _ = Company.objects.update_or_create(
            short_name=company_info["short_name"],
            defaults=company_info,
        )

        # Messaging channels
        messaging_channels = ["WhatsApp", "Line", "Telegram"]
        for name in messaging_channels:
            MessagingChannel.objects.get_or_create(company=company, name=name)

        # Features (src/data/content.js -> features)
        features = [
            {
                "title": "Industrial-Grade Quality",
                "description": (
                    "Engineered for harsh conditions and long-lasting protection. "
                    "Our formulations meet stringent industry standards for durability and performance."
                ),
                "icon": "shield",
            },
            {
                "title": "Fast Delivery Network",
                "description": (
                    "Strategic location in Malabon ensures rapid distribution to construction sites "
                    "and dealer networks throughout Metro Manila."
                ),
                "icon": "truck",
            },
            {
                "title": "Technical Support",
                "description": (
                    "Expert consultation for contractors and dealers. Our team provides application "
                    "guidance and project-specific recommendations."
                ),
                "icon": "tools",
            },
        ]

        for f in features:
            Feature.objects.update_or_create(
                company=company,
                title=f["title"],
                defaults={
                    "description": f["description"],
                    "icon": f["icon"],
                },
            )

        # Benefits (src/data/content.js -> benefits)
        benefits = [
            {
                "title": "Corrosion Protection",
                "description": "Advanced rust inhibitors for metal surfaces in humid environments",
                "image": "/assets/benefits/corrosion-protection.jpg",
            },
            {
                "title": "Weather Resistance",
                "description": "UV-stable formulations that withstand tropical climate conditions",
                "image": "/assets/benefits/weather-resistance.jpg",
            },
            {
                "title": "High Coverage",
                "description": "Cost-effective application with superior spreading and hiding power",
                "image": "/assets/benefits/high-coverage.jpg",
            },
        ]

        for b in benefits:
            Benefit.objects.update_or_create(
                company=company,
                title=b["title"],
                defaults={
                    "description": b["description"],
                    "image": b["image"],
                },
            )

        # Testimonials (src/data/content.js -> testimonials)
        testimonials = [
            {
                "name": "Engr. Roberto Santos",
                "company_name": "Santos Construction Corp.",
                "text": (
                    "We've been using PhilPaint products for over 10 years. "
                    "Their industrial coatings have proven reliable on every major project "
                    "we've undertaken."
                ),
                "rating": 5,
            },
            {
                "name": "Maria Gonzales",
                "company_name": "Gonzales Hardware & Supply",
                "text": (
                    "As a dealer, PhilPaint's consistent quality and delivery schedule make them "
                    "our top choice. Our contractor clients trust the brand."
                ),
                "rating": 5,
            },
            {
                "name": "Engr. Carlos Reyes",
                "company_name": "Reyes Engineering Services",
                "text": (
                    "Technical support is excellent. They helped us select the right coating system "
                    "for a challenging marine environment application."
                ),
                "rating": 5,
            },
        ]

        for t in testimonials:
            Testimonial.objects.update_or_create(
                company=company,
                name=t["name"],
                company_name=t["company_name"],
                defaults={
                    "text": t["text"],
                    "rating": t["rating"],
                },
            )

        # Team (src/data/content.js -> aboutContent.team)
        team_members = [
            {
                "name": "Ernesto M. Villanueva",
                "position": "General Manager",
                "bio": (
                    "With over 25 years in the paint manufacturing industry, Ernesto leads our "
                    "operations with a focus on quality and customer relationships."
                ),
                "image": "/assets/team/ernesto-villanueva.jpg",
            },
            {
                "name": "Dr. Linda A. Cruz",
                "position": "Chief Chemist",
                "bio": (
                    "PhD in Chemical Engineering from UP Diliman. Linda oversees formulation "
                    "development and quality control protocols."
                ),
                "image": "/assets/team/linda-cruz.jpg",
            },
            {
                "name": "Antonio R. Mendoza",
                "position": "Sales & Distribution Manager",
                "bio": (
                    "Former contractor turned sales leader, Antonio understands customer needs and "
                    "manages our dealer network."
                ),
                "image": "/assets/team/antonio-mendoza.jpg",
            },
        ]

        for m in team_members:
            TeamMember.objects.update_or_create(
                company=company,
                name=m["name"],
                position=m["position"],
                defaults={
                    "bio": m["bio"],
                    "image": m["image"],
                },
            )

        self.stdout.write(self.style.SUCCESS("PhilPaint content seeded successfully."))
