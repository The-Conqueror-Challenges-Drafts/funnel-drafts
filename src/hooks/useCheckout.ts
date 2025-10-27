'use client';

import { gtm } from "@/components/analytics/google-tag-manager";
import { validateCheckoutForm, storeFirstStepInputs } from "@/lib/checkoutUtils"

export const initiateCheckout = (firstName: string, lastName: string, email: string) => {
    console.log("initiateCheckout", firstName, lastName, email);
    const validationResult = validateCheckoutForm({ firstName, lastName, email });
    if (validationResult.errors.length > 0) {
        return {
            success: false,
            errors: validationResult.errors,
            fields: validationResult.fields
        }
    }

    triggerCdcoEmailLeadDlEvent(firstName, lastName, email, "Challenge Name", "Challenge Image URL");
    storeFirstStepInputs(firstName, lastName, email);


}


function triggerCdcoEmailLeadDlEvent(firstName: string, lastName: string, email: string, challengeName: string, challengeImageUrl: string) {
    const emailLeadDetails = {
        'leadEmail': email,
        'leadFirstName': firstName,
        'leadLastName': lastName
    }

    gtm.emailLeadSubmit(emailLeadDetails, challengeName, challengeImageUrl);
}