"use client";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const supabaseUrl = "https://hipxxmcemoijeoodeedi.supabase.co"; // Replace with your actual Supabase project URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcHh4bWNlbW9pamVvb2RlZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxODY4MzYsImV4cCI6MjAyMTc2MjgzNn0.HzmBO7wXiX0omu3UeKwjomh9a7hAlUX7IhZLC-sCnGg"; // Replace with your actual Supabase anonymous key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text:slug ,
        });

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

    if(!noCount){
        incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
  .from('views')
  .select('count')
  .match({slug: slug})
  .single()

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };


        setViews(data ? data.count : 0)
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

        getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;