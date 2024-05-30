"use client";
import { CreatePaper } from "@/providers/QuestionPaper/Create";
import React, { useContext, useState } from "react";

type Props = {};

function NextStepsModel({}: Props) {
  const { show } = useContext(CreatePaper);
  const subcomp = []
  const [subs ,setSubs] =useState<number>(0);
  return show ? null : 
  <div className=" px-5 py-3 flex-1  flex flex-col-reverse   items-end gap-3 bg-white  rounded-md "> 
    
    <div className=" h-24 w-full bg-red-400 sticky bottom-0">

    </div>
    <div className=" flex-1 max-h-[34rem] w-full overflow-y-scroll">
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
<p>Text</p>
    </div>
    <div className=" h-20 bg-yellow-400 w-full">
        
    </div>
  </div>;
}

export default NextStepsModel;
