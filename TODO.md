# CLAP Dashboard UI Redesign TODO

## Overview
Redesign the dashboard to match provided screenshots with header, sidebar, tabs, and section-specific UIs using shadcn/ui components and static mock data.

## Steps

### 1. Update Dashboard.tsx Layout
- [x] Add header with "CLAP Dashboard" title, version "v2.0", profile icon/dropdown.
- [x] Add sidebar with quick actions (New Invoice, New Member, Process Refund, Generate Report, Add Member).
- [x] Add main content with Tabs: Overview, Members, Reports, Payments, Refunds, Feedback.
- [x] Overview tab: Metrics cards (Total Payments RM 45,800, etc.), Recent Activities list.
- [x] Render section components in respective tabs (e.g., <MemberManagement /> in Members tab).

### 2. Implement MemberManagement.tsx
- [x] Table with columns: Type, Member Name, Contact, Branch, Duration, Status (Active/Pending badges), Actions.
- [x] Sample data: ABC Logistics, Ali Bin Abu, etc.
- [x] Tabs or sections for Directory and New Registration.

### 3. Implement ReportsSystem.tsx
- [x] Form: Report type (select), Start/End date (calendar), Branch (select), Export format (PDF/Excel).
- [x] Generate Report button.
- [x] Quick Templates cards: Invoice Report, Bounced Check, etc.

### 4. Implement PaymentProcessing.tsx
- [x] Payment Method select: Maybank, CIMB, etc.
- [x] Pending Invoices table: INV#, Date, Amount.
- [x] Cart summary with total.

### 5. Implement RefundManagement.tsx
- [x] Reload CLA section: Current Balance input, Quick amounts buttons (RM500,1000,2000), Reload button.
- [x] Refund CLA table: Bank, Date, Amount, Status (Completed).

### 6. Implement FeedbackSystem.tsx
- [x] Form: Feedback Type (select), Subject (input), Description (textarea), Priority (select: Low/Medium/High).
- [x] Submit Feedback button.
- [x] Support info sidebar: Contact website, response times.

### 7. Testing
- [x] Run `npm run dev`.
- [x] Launch browser to http://localhost:5176 and verify layout/tabs match screenshots.
- [x] Test tab switching and basic interactions.

### 8. Make Tabs Fully Functional and Add Animations
- [ ] Add mock onClick actions to all buttons (alerts for success/coming soon).
- [ ] Add hover animations to TabsTrigger (scale, bg color).
- [ ] Add hover/click animations to all Buttons (scale, active scale-down).
- [ ] Update Dashboard.tsx: Tabs and overview buttons.
- [ ] Update MemberManagement.tsx: Sub-tabs, table actions, form submit.
- [ ] Update ReportsSystem.tsx: Generate button, template cards.
- [ ] Update PaymentProcessing.tsx: Process/confirm buttons, table actions.
- [ ] Update RefundManagement.tsx: Reload/refund actions, preset buttons.
- [ ] Update FeedbackSystem.tsx: Submit button, star clicks.

### 9. Testing and Finalization
- [ ] Run `npm run dev`.
- [ ] Launch browser and verify tabs switch, buttons animate/respond.
- [ ] Update TODO.md with completions.
- [ ] Ensure no errors, responsive design.
