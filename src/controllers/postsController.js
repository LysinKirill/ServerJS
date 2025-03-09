"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsService_1 = require("../services/postsService");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, postsService_1.getPosts)();
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, postsService_1.getPostById)(parseInt(req.params.id));
        if (post) {
            res.json(post);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
