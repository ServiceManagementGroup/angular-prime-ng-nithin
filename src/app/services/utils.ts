import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Utils {
    checkNullOrEmpty(value: string | number | null) {
        return value == null || value == typeof undefined || value == "";
    }
}

export interface EnvironmentConfig {
    environment: {
        baseAPIUrl: string;
    };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');