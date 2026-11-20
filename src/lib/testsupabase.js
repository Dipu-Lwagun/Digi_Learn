import { supabase } from "./supabase";

const testsupabase = async () => {
  const { data, error } = await supabase
  .from("contacts")
  .insert({
    name:"haro",
    email:"haro@gmail.com",
    phone:"9876543210"
  })

  if (error) {
    console.error("supabase connect error vayo:", error.message);
  } else {
    console.log("supabase connect successfully", data);
  }
};

testsupabase();
