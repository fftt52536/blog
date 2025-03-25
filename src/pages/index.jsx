import React from 'react';
import Framework from '../components/framework/blog.jsx';
import Main from '../components/main/main.jsx';
import { createRoot } from 'react-dom/client';

var target = document.createElement("div");
target.classList.add('page');
document.body.append(target);
const root = createRoot(target);

root.render(
    <Framework page={<Main />}/>
);