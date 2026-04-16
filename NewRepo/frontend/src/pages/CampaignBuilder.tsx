import React, { useState } from 'react';

const CampaignBuilder: React.FC = () => {
    const [contactList, setContactList] = useState<File | null>(null);
    const [template, setTemplate] = useState<string>('');
    const [scheduledTime, setScheduledTime] = useState<Date | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setContactList(file);
    };

    const handleTemplateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTemplate(event.target.value);
    };

    const handleScheduleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScheduledTime(new Date(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Logic to handle campaign submission goes here
    };

    return (
        <div>
            <h1>Campaign Builder</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="contactList">Upload Contact List:</label>
                    <input type="file" id="contactList" onChange={handleFileChange} />
                </div>
                <div>
                    <label htmlFor="template">Message Template:</label>
                    <textarea id="template" value={template} onChange={handleTemplateChange} />
                </div>
                <div>
                    <label htmlFor="schedule">Schedule Time:</label>
                    <input type="datetime-local" id="schedule" onChange={handleScheduleChange} />
                </div>
                <button type="submit">Create Campaign</button>
            </form>
        </div>
    );
};

export default CampaignBuilder;