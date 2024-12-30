import { json, text, varchar, serial } from "drizzle-orm/pg-core"; 
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mock_interview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDescription: varchar('jobDescription').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    mockId: varchar('mockId').notNull()
});

export const UserAnswers = pgTable('userAnswers',{
    id: serial('id').primaryKey(),
    mockIdRef : varchar('mockIdRef').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),
    CreatedBy: varchar('CreatedBy'),
    createdAt: varchar('createdAt'),


})