/*
import { Observable } from "rxjs";
import { HttpService } from "src/app/shared/service/http.service";
import { DataResultModel } from "../../domain/models/dataResult.model";
import { HealthPersonnel } from "../../domain/models/healthPersonnel";
import { Injectable } from "@angular/core";

@Injectable()
export class RegisterPatient {
    constructor(private readonly http: HttpService) { }

    getHealthPersonnel(): Observable<DataResultModel<HealthPersonnel>> {
        return this.http.get<DataResultModel<HealthPersonnel>>(`​/api​/homeCare​/getHealthPersonnel`);
    }
}
*/