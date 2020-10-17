from allauth.account.forms import SignupForm
from django import forms


class CustomSignupForm(SignupForm):
    GENDER_CHOICES = (
        ('M', 'MALE'),
        ('F', 'FEMALE'),
        ('O', 'OTHER'),
    )
    first_name = forms.CharField(max_length=30, label='First Name')
    last_name = forms.CharField(max_length=30, label='Last Name')
    nationality = forms.CharField(max_length=3, label='Nationality')
    gender = forms.ChoiceField(choices=GENDER_CHOICES, label='Gender')
    institute = forms.CharField(max_length=255, label='Institute')

    def signup(self, request, user):
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.nationality = self.cleaned_data['nationality']
        user.gender = self.cleaned_data['gender']
        user.institute = self.cleaned_data['institute']
        user.save()
        return user

