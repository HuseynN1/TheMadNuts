"use server"
import Form from "@/components/WaitList/FormSectionWaitList/Form";
import { PostFormData } from "@/types";



export const postData = async (formData: PostFormData) => {
    console.log(formData);
    fetch("https://themadnuts-admin.vercel.app/api/81a50b3e-c4ed-4e51-9829-864a49832f22/waitlist", {
        method: "POST",
        body: JSON.stringify(formData)
    })

}
const FormSectionWaitList = async () => {

    return (
        <section className="max-w-[70rem] mx-auto">
            <div className="border-b border-gray-900/10 pb-12">
                <Form />
            </div>
        </section>
    )
}

export { FormSectionWaitList }