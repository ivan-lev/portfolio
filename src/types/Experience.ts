type ExperienceField = {
  [key: string]: string;
};

export type Experience = {
  id: number;
  position: ExperienceField;
  type: ExperienceField;
  organization: ExperienceField;
  location?: ExperienceField;
  period: ExperienceField;
  certificate?: string;
};
