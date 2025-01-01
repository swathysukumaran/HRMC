import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface MemberFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<MemberFormInputs>;
  initialData?: MemberFormInputs;
}

interface MemberFormInputs {
  name: string;
  dob: Date;
  membershipNumber: string;
  bloodGroup: string;
  fathersName: string;
  houseName: string;
  address: string;
  mobileNumber: string;
  whatsappNumber: string;
  occupation: string;
  occupationDetails: string;
  interests: string[];
  photo: FileList;
  notes?: string;
}

const MemberFormModal: React.FC<MemberFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberFormInputs>({
    defaultValues: initialData,
  });

  const [interests, setInterests] = useState<string[]>(
    initialData?.interests || []
  );

  const handleInterestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const validateForm = (data: MemberFormInputs) => {
    const newErrors: Partial<Record<keyof MemberFormInputs, string>> = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.dob) newErrors.dob = "Date of birth is required";
    if (!data.membershipNumber)
      newErrors.membershipNumber = "Membership number is required";
    if (!data.bloodGroup) newErrors.bloodGroup = "Blood group is required";
    if (!data.fathersName) newErrors.fathersName = "Father's name is required";
    if (!data.houseName) newErrors.houseName = "House name is required";
    if (!data.address) newErrors.address = "Address is required";
    if (!data.mobileNumber)
      newErrors.mobileNumber = "Mobile number is required";
    if (!data.whatsappNumber)
      newErrors.whatsappNumber = "Whatsapp number is required";
    if (!data.occupation) newErrors.occupation = "Occupation is required";
    if (!data.occupationDetails)
      newErrors.occupationDetails = "Occupation details are required";
    if (!data.interests.length) newErrors.interests = "Interests are required";
    if (!data.photo || data.photo.length === 0)
      newErrors.photo = "Photo is required";
    else if (data.photo[0].size > 2000000)
      newErrors.photo = "The file is too large";
    else if (
      !["image/jpeg", "image/png", "image/gif"].includes(data.photo[0].type)
    )
      newErrors.photo = "Unsupported file format";

    return newErrors;
  };

  const onSubmitForm: SubmitHandler<MemberFormInputs> = (data) => {
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
      return;
    }
    onSubmit(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Member" : "Add Member"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                {...register("dob")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Membership Number</label>
              <input
                type="text"
                {...register("membershipNumber")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.membershipNumber && (
                <p className="text-red-500 text-sm">
                  {errors.membershipNumber.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Blood Group</label>
              <input
                type="text"
                {...register("bloodGroup")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.bloodGroup && (
                <p className="text-red-500 text-sm">
                  {errors.bloodGroup.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Father's Name</label>
              <input
                type="text"
                {...register("fathersName")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.fathersName && (
                <p className="text-red-500 text-sm">
                  {errors.fathersName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">House Name</label>
              <input
                type="text"
                {...register("houseName")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.houseName && (
                <p className="text-red-500 text-sm">
                  {errors.houseName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                {...register("address")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="text"
                {...register("mobileNumber")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Whatsapp Number</label>
              <input
                type="text"
                {...register("whatsappNumber")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.whatsappNumber && (
                <p className="text-red-500 text-sm">
                  {errors.whatsappNumber.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Occupation</label>
              <input
                type="text"
                {...register("occupation")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.occupation && (
                <p className="text-red-500 text-sm">
                  {errors.occupation.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Occupation Details</label>
              <input
                type="text"
                {...register("occupationDetails")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.occupationDetails && (
                <p className="text-red-500 text-sm">
                  {errors.occupationDetails.message}
                </p>
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Interests</label>
              <div className="flex flex-wrap gap-2">
                {["Sports", "Arts", "Politics"].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={interest}
                      checked={interests.includes(interest)}
                      onChange={handleInterestsChange}
                      className="form-checkbox"
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
              {errors.interests && (
                <p className="text-red-500 text-sm">
                  {errors.interests.message}
                </p>
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Photo</label>
              <input
                type="file"
                {...register("photo")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Notes</label>
              <textarea
                {...register("notes")}
                className="w-full px-4 py-2 border rounded"
              />
              {errors.notes && (
                <p className="text-red-500 text-sm">{errors.notes.message}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-500 text-white">
              {initialData ? "Update Member" : "Add Member"}
            </Button>
            <Button onClick={onClose} variant="link" className="ml-2">
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MemberFormModal;
