<template>
    <div class="sign-up-wrapper">
        <div class="sign-up-body p-4 overflow-hidden">
            <div class="sign-up-icon">
                <svg width="364" height="315" viewBox="0 0 364 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M227.535 76.2014C228.991 70.7662 236.703 70.7662 238.16 76.2014L242.547 92.5737C253.34 132.85 284.835 164.287 325.131 175.005L341.682 179.407C347.131 180.856 347.131 188.588 341.682 190.037L325.131 194.44C284.835 205.158 253.34 236.595 242.547 276.871L238.16 293.243C236.703 298.678 228.991 298.678 227.535 293.243L223.147 276.871C212.354 236.595 180.859 205.158 140.563 194.44L124.012 190.037C118.563 188.588 118.563 180.856 124.012 179.407L140.563 175.005C180.859 164.287 212.354 132.85 223.147 92.5737L227.535 76.2014Z" fill="white" stroke="black"/>
                    <path d="M149.271 21.7566C150.727 16.3214 158.44 16.3214 159.896 21.7566L164.181 37.7456C174.974 78.0217 206.469 109.458 246.765 120.176L262.932 124.476C268.381 125.926 268.381 133.658 262.932 135.107L246.765 139.407C206.469 150.125 174.974 181.562 164.181 221.838L159.896 237.827C158.44 243.262 150.727 243.262 149.271 237.827L144.986 221.838C134.193 181.562 102.698 150.125 62.4019 139.407L46.2345 135.107C40.7862 133.658 40.7862 125.926 46.2345 124.476L62.4018 120.176C102.698 109.458 134.193 78.0217 144.986 37.7457L149.271 21.7566Z" stroke="black"/>
                    <path d="M256.147 19.4655C256.331 17.6694 258.947 17.6694 259.131 19.4655L259.391 22.0044C260.239 30.2741 266.787 36.8064 275.059 37.6335L277.549 37.8824C279.349 38.0625 279.35 40.6875 277.549 40.8676L275.059 41.1165C266.787 41.9436 260.239 48.4759 259.391 56.7456L259.131 59.2845C258.947 61.0806 256.331 61.0806 256.147 59.2845L255.887 56.7456C255.039 48.4759 248.491 41.9436 240.219 41.1165L237.729 40.8676C235.928 40.6875 235.928 38.0625 237.729 37.8824L240.219 37.6335C248.491 36.8064 255.039 30.2741 255.887 22.0044L256.147 19.4655Z" fill="white" stroke="black"/>
                    <path d="M23.4992 77.8117C23.5991 76.8445 25.012 76.8444 25.1119 77.8117C25.677 83.2819 30.0137 87.6158 35.4878 88.1589C36.4532 88.2547 36.4532 89.662 35.4878 89.7578C30.0137 90.3008 25.677 94.6348 25.1119 100.105C25.012 101.072 23.5991 101.072 23.4992 100.105C22.9341 94.6348 18.5974 90.3008 13.1233 89.7578C12.1579 89.662 12.1579 88.2547 13.1233 88.1589C18.5974 87.6158 22.9341 83.2819 23.4992 77.8117Z" fill="white" stroke="black"/>
                </svg>
            </div>
            <UCard class=" w-full flex-col gap-4 rounded-xl">
                <template #header>
                    <p class="text-center">
                        Sign-Up 
                    </p>
                </template>
                <UForm :state="signUpState" :schema="signUpSchema" @submit="onSubmit" >
                    <div class="space-y-4 flex-col gap-2">
                        <UFormGroup label="Email" name="email">
                            <UInput type="string" v-model="signUpState.email">

                            </UInput>
                        </UFormGroup>

                        <UFormGroup  label="Password" name="password">
                            <UInput v-model="signUpState.password" type="password">

                            </UInput>
                        </UFormGroup>

                        <UButton type="submit" block>
                          Sign-Up
                        </UButton>
                    </div>
                </UForm>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import z from 'zod';
import { useAuthService } from '~/entities/user/services/authService';
import { useUserStore } from '~/entities/user/model/store';
// import type { FormSubmitEvent } from '@nuxthq/ui';
definePageMeta({
    layout: false
})
type FormSubmitEvent<T> = { data: T; event: Event };

const { signUp } = useAuthService();

const signUpState = reactive({
    email: '',
    password: ''
})

async function handleSignUp() {
    try {
        await signUp(signUpState.email, signUpState.password);
        console.log("User sign-up:");
    } catch {
        console.log("Sign-up Error");
    }
}


const signUpSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'min length must be 8')
})
type Schema = z.output<typeof signUpSchema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  handleSignUp();
}

</script>

<style scoped>

.sign-up-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-up-body {
    max-width: 373px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    background: #F0F3FB;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

}

</style>