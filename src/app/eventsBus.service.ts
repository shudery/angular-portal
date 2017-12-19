import { Injectable } from '@angular/core';

//保存一份各组件可共享的服务提供情况数据，
@Injectable()
export class EventsBus {

    data = {
        serviceA : true,
        serviceB : true,
        serviceC : true,
    };
    constructor() { }

}