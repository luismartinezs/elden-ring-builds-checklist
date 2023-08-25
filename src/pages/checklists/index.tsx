const checklists = ["templar-lvl1-50"];

export function ChecklistsPage() {
  return (
    <div>
      <h1>Checklists</h1>
      <ul>
        {checklists.map((checklist) => (
          <li key={checklist}>
            <a href={`/checklists/${checklist}`}>{checklist}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
