import React, { useRef, useState, ChangeEvent } from "react";
import useProfileStore from "../../store/profileStore";
import "./styles.scss";
import Placeholder from "../../../public/assets/placeholder.png";

const ImgUpload = () => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { firstName } = useProfileStore(state => ({
        firstName: state.firstName,
    }));

    // ON BUTTON CLICK TRIGGER HIDDEN INPUT CLICK
    const handleInputClick = () =>
        fileInputRef.current && fileInputRef.current.click();

    // CACHE THE UPLOADED PICTURE IN LOCAL STORAGE
    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setImage(reader.result?.toString() ?? null);
                localStorage.setItem(
                    "profileImage",
                    reader.result?.toString() ?? "",
                );
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="image-upload" onClick={handleInputClick}>
            <div className="overlay">
                <p>+</p>
            </div>

            <div className="upload-img">
                {image ? (
                    <img
                        src={image || ""}
                        alt={`${firstName}'s profile picture`}
                    />
                ) : (
                    <img src={Placeholder} alt="Placeholder Image" />
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                name="file"
                id="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default ImgUpload;
