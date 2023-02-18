DROP DATABASE IF EXISTS medical_center;
CREATE DATABASE medical_center;
\c medical_center;

CREATE TABLE doctors(
    id SERIAL PRIMARY KEY,
    doctor_first_name TEXT NOT NULL,
    doctor_last_name TEXT NOT NULL
);

CREATE TABLE patients(
    id SERIAL PRIMARY KEY,
    patient_first_name TEXT NOT NULL,
    patient_last_name TEXT NOT NULL
);

CREATE TABLE diseases(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE visits(
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients ON DELETE SET NULL,
    doctor_id INTEGER REFERENCES doctors ON DELETE SET NULL,
    diagnosis_id INTEGER REFERENCES diseases ON DELETE SET NULL
);


INSERT INTO doctors (doctor_first_name, doctor_last_name)

VALUES
('Michael', 'Finch'),('Rory', 'Hansen'),('Coldby', 'Turner'), ('Mia', 'Rosario');


INSERT INTO patients(patient_first_name, patient_last_name)

VALUES
('Noel', 'Herrera'),('William', 'Billard'),('Rico', 'Rice'), ('Fleur', 'Snow');

INSERT INTO diseases(name)

VALUES
('Asthma'),('Cold'),('Flu'), ('Allergies');




SELECT doctor_id, doctor_first_name, doctor_last_name, patient_id, patient_first_name,
patient_last_name,diagnosis_id, name
FROM visits 
 JOIN patients 
ON (patients.id = visits.patient_id)
JOIN diseases
ON (diseases.id = visits.diagnosis_id)
JOIN doctors 
ON (doctors.id = visits.doctor_id)
