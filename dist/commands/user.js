"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var session;
function default_1(program, s) {
    session = s;
    program
        .command('user')
        .alias('u')
        .description('Shows current user info.')
        .action(handler);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function handler() {
    return __awaiter(this, void 0, void 0, function* () {
        let u = yield session.getUser();
        session.log(`Logged in as [cyan][${u.id}] ${u.firstName} ${u.lastName} (${u.email})[/cyan].`);
    });
}
;
