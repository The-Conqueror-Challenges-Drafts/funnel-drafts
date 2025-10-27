export interface FieldValidation {
    isValid: boolean;
    error?: string;
}

export interface CheckoutValidationResult {
    isValid: boolean;
    fields: {
        firstName: FieldValidation;
        lastName: FieldValidation;
        email: FieldValidation;
    };
    errors: string[];
}

function validateEmail(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function validateCheckoutForm(data: {
    firstName?: string;
    lastName?: string;
    email?: string;
}): CheckoutValidationResult {
    const errors: string[] = [];
    const fields: CheckoutValidationResult['fields'] = {
        firstName: { isValid: true },
        lastName: { isValid: true },
        email: { isValid: true },
    };

    // Validate First Name
    if (!data.firstName || data.firstName.trim() === '') {
        const error = 'First Name is a required field';
        fields.firstName = { isValid: false, error };
        errors.push(error);
    }

    // Validate Last Name
    if (!data.lastName || data.lastName.trim() === '') {
        const error = 'Last Name is a required field';
        fields.lastName = { isValid: false, error };
        errors.push(error);
    }

    // Validate Email
    if (!data.email || data.email.trim() === '') {
        const error = 'Email is a required field';
        fields.email = { isValid: false, error };
        errors.push(error);
    } else if (!validateEmail(data.email)) {
        const error = 'A valid Email Address is required';
        fields.email = { isValid: false, error };
        errors.push(error);
    }

    return {
        isValid: errors.length === 0,
        fields,
        errors,
    };
}

export function storeFirstStepInputs(firstName: string, lastName: string, email: string) {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
        console.warn('storeFirstStepInputs called on server side - skipping');
        return;
    }

    sessionStorage.setItem("1s_checkout_fn", firstName);
    sessionStorage.setItem("1s_checkout_ln", lastName);
    sessionStorage.setItem("1s_checkout_email", email);
    sessionStorage.setItem("2step_checkout_prefill_checkout", "To prefill");

    const userObject = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    const dateExpires = new Date();
    const expiresInSeconds = 3600;
    dateExpires.setTime(dateExpires.getTime() + (expiresInSeconds*1000));

    document.cookie =
        "__wc_user_identification=" + 
        btoa(JSON.stringify(userObject)) +
        "; expires=" + dateExpires.toUTCString() +
        "; domain=theconqueror.events" +
        "; path=/" +
        "; Secure" +
        "; SameSite=Lax";
}
