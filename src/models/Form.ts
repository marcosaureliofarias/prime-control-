import mongoose, { Schema, Document } from "mongoose";

interface IForm extends Document {
  completeName: string;
  birthDate: string;
  completeAddress: string;
  email: string;
  phone: string;
  howMuchPeopleLivesWithYou: number;
  familyIncome: string;
  scolarity: string;
  genderIdentity: string;
  sexualOrientation: string;
  haveStudyEquipment: boolean;
  technologyExperience: string;
  githubLink?: string;
  linkedinLink?: string;
}

const FormSchema = new Schema<IForm>(
  {
    completeName: { type: String, required: true },
    birthDate: { type: String, required: true },
    completeAddress: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    scolarity: { type: String, required: true },
    familyIncome: { type: String, required: true },
    genderIdentity: { type: String, required: true },
    sexualOrientation: { type: String, required: true },
    technologyExperience: { type: String, required: true },
    githubLink: { type: String, required: false },
    linkedinLink: { type: String, required: false },
    howMuchPeopleLivesWithYou: { type: Number, required: true },
    haveStudyEquipment: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IForm>("Form", FormSchema, "Form");
