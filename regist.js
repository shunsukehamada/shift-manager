"use strict";
// import liff from "@line/liff";
// import {liff} from "../node_modules/@line/liff/dist/lib/index.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const InputData = document.getElementById("date");
//今日の日時を表示
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const toTwoDigits = function (num, digit) {
    num = String(num) + "";
    if (num.length < digit) {
        num = "0" + num;
    }
    return num;
};
const yyyy = toTwoDigits(year, 4);
const mm = toTwoDigits(month, 2);
const dd = toTwoDigits(day, 2);
const ymd = yyyy + "-" + mm + "-" + dd;
InputData.value = ymd;
const button = document.querySelector(".submit");
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield liff.init({ liffId: "1657402011-jvbPEQOA" });
    liff.sendMessages([
        {
            type: "text",
            text: "Hello, World!",
        },
    ]);
    liff.closeWindow();
}));
