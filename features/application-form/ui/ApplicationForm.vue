<template>
    <UCard>
        <template #header>
            <div class="content max-w-[1700px] m-auto">
                <header class="site-header p-[5px]">
                    <div class="step-bar-wrapper ">
                        <div class="step-bar-content flex justify-between py-[10px] gap-4  flex-auto">
                            <div class="bar-step step-1">
                                <div class="bar-step-body">
                                    <div class="title">
                                        1. Умумий маълумотлар
                                    </div>
                                    <span class=""></span>
                                </div>
                            </div>
                            <div class="bar-step step-2">
                                <div class="bar-step-body">
                                    <div class="title">
                                        2. Харажатлар
                                    </div>
                                    <span class=""></span>
                                </div>
                            </div>
                            <div class="bar-step step-3">
                                <div class="bar-step-body">
                                    <div class="title">
                                        3. Даромадлар
                                    </div>
                                    <span class=""></span>
                                </div>
                            </div>
                            <div class="bar-step step-4">
                                <div class="bar-step-body">
                                    <div class="title">
                                        4. Натижа
                                    </div>
                                    <span class=""></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </template>
        <div class="body-wrapper">
            <div v-show="dataHolder.step === 1" class="step-1">
                <div class="body-title">
                    <p><b>Рўйхатдан ўтилган манзил:</b></p>
                </div>

                <div class="body-content">
                    <div class="address-section">
                        <div class="address-section-body">
                            <USelectMenu size="xl"
                            v-model="dataHolder.region_id" 
                            value-attribute="id"
                            option-attribute="name"
                            :options="region_list"
                            @change="getDistrcitFunc"
                            placeholder="Regions" 
                            searchable 
                            clear-search-on-close>
                            <template #leading>
                                <UAvatar
                                  src="https://api.iconify.design/oui:vis-map-region.svg"
                                  size="2xs"
                                />
                            </template>
                            </USelectMenu>

                            <USelectMenu size="xl"
                            v-model="dataHolder.district_id" 
                            value-attribute="id"
                            option-attribute="name"
                            :options="district_list" 
                            @change="getMahallaFunc"
                            :disabled = "dataHolder.region_id == 1"
                            placeholder="Districts"
                            searchable 
                            clear-search-on-close/>

                            <USelectMenu size="xl"
                            v-model="dataHolder.mahalla_id" 
                            value-attribute="id"
                            option-attribute="fullname"
                            :options="mahalla_list"
                            :disabled = "dataHolder.district_id == 1"
                            @change="getStreetFunc"
                            placeholder="Area"
                            searchable 
                            clear-search-on-close/>

                            <USelectMenu size="xl"
                            class="text-lg"
                            v-model="dataHolder.street_id" 
                            :disabled = "dataHolder.mahalla_id == 1"
                            value-attribute="id"
                            option-attribute="name"
                            :options="street_list"
                            placeholder="Street"
                            searchable 
                            clear-search-on-close/>

                            <UInput placeholder="home number" 
                            size="xl" 
                            :disabled = "dataHolder.street_id == 1" 
                            v-model="dataHolder.home_number" >
                              <template #leading>
                                <UAvatar
                                  src="https://api.iconify.design/heroicons:home.svg"
                                  size="2xs"
                                />
                              </template>
                            </UInput>

                            <UInput placeholder="phone number" 
                            size="xl" 
                            v-model="dataHolder.phone_number" >
                              <template #leading>
                                <UAvatar
                                  src="https://api.iconify.design/heroicons:device-phone-mobile.svg"
                                  size="2xs"
                                />
                              </template>
                            </UInput>
                        </div>
                    </div>
                    <div class="geolocation-section">
                        <div id="yandex-map" style="width: 100%; height: 400px;"></div>
                    </div>
                </div>
            </div>
            <div  v-show="dataHolder.step === 2" class="step-2">
                
            </div>
        </div>
        <template #footer>
            <div class="footer-container flex justify-between">
                <UButton @click="nextStep()" >Back</UButton>
                <UButton>Next</UButton>
            </div>
        </template>
    </UCard>
</template>



<script setup lang="ts">
import '../ui/style.css'
import type { AppData } from '../types/formData';

import { ref, onMounted } from "vue";
import { getInfo } from '../lib/api';

useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_US',
      defer: true,
    },
  ],
});



const dataHolder = ref<AppData> ({
    step: 1,
    region_id: 1,
    district_id: 1,
    mahalla_id: 1,
    street_id: 1,
    home_number: '',
    phone_number: '',
    cadastr_number: '',
    geolocation: []
})

const region_list = ref([]);
const district_list = ref([]);
const mahalla_list = ref([]);
const street_list = ref([]);



definePageMeta({
    layout: 'application-layout'
})



onMounted(async () => {
    try {
        region_list.value = await getInfo.getRegion(); // Fetch options when form loads
        console.log(region_list)
    } catch(error) {
        console.log('error', error)
    }
    // init()
});


// function init() {
//     var map = new ymaps.Map('yandex-map', {
//         center: [41.2995, 69.2401], // Default coordinates
//         zoom: 10
//     });

//     var placemark; // Variable to store the placemark

//     // Add event listener for user click
//     map.events.add('click', function (e) {
//         var coords = e.get('coords');
        
//         // Add or move the placemark
//         if (placemark) {
//             placemark.geometry.setCoordinates(coords); // Move existing placemark
//         } else {
//             placemark = new ymaps.Placemark(coords, {}, {
//                 preset: 'islands#redDotIcon', // You can customize the marker style
//             });
//             map.geoObjects.add(placemark); // Add new placemark to map
//         }

//         // Update coordinates in the form fields
//         handleGeolocationInput(coords);
//     });
// }

// function handleGeolocationInput(coords) {
//     console.log(coords)
//     // document.getElementById('latitude').value = coords[0].toFixed(6);
//     // document.getElementById('longitude').value = coords[1].toFixed(6);
// }

function nextStep() {

}

async function getDistrcitFunc(val : number) {
    try {
        district_list.value = await getInfo.getDistrict(val); // Fetch options when form loads
    } catch(error) {
        console.log('error', error)
    }
}

async function getMahallaFunc(val:number) {
    try {
        mahalla_list.value = await getInfo.getMahalla(val); // Fetch options when form loads
        console.log(mahalla_list)
    } catch(error) {
        console.log('error', error)
    }
}

async function getStreetFunc(val:number) {
    try {
        street_list.value = await getInfo.getStreets(val); // Fetch options when form loads
        console.log(mahalla_list)
    } catch(error) {
        console.log('error', error)
    }
}

</script>



<style scoped>

</style>