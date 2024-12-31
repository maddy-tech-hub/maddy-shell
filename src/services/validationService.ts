// Field validation utility
export const validateField = (field: string, value: string): string => {
  switch (field) {
    case 'fullName':
      return value.length >= 5
        ? ''
        : 'Full Name must be at least 5 characters.';
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ''
        : 'Invalid email format.';
    case 'password':
    case 'currentPassword':
    case 'newPassword':
    case 'confirmPassword':
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value
      )
        ? ''
        : 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.';
    case 'phone':
      return /^\d{10}$/.test(value) ? '' : 'Phone number must be 10 digits.';
    default:
      return '';
  }
};

export const isFormValid = (
  formData: Record<string, string>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  for (const field in formData) {
    errors[field] = validateField(field, formData[field]);
  }

  return {
    isValid: !Object.values(errors).some((err) => err !== ''),
    errors,
  };
};
