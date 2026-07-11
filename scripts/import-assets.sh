#!/usr/bin/env bash
# One-time importer: copies the images we use from the source content folder
# into src/assets/content/ under clean, slug-based names so Astro's image
# pipeline can process them. Re-running is safe (idempotent copy).
#
# The source folder ("Project - GCE Website/") is kept untouched for reference.
set -euo pipefail

SRC="Project - GCE Website/College_Website_Content"
DST="src/assets/content"

copy_dir() {
  # copy_dir <source-subdir> <dest-slug> [filename-prefix]
  # Copies all images in a folder. When several source folders feed one slug,
  # pass a distinct prefix so identically-named files (Image_01.jpg) don't clash.
  local src="$SRC/$1" dst="$DST/$2" prefix="${3:-}"
  [ -d "$src" ] || { echo "  skip (missing): $1"; return; }
  mkdir -p "$dst"
  local f
  while IFS= read -r f; do
    cp "$f" "$dst/$prefix$(basename "$f")"
  done < <(find "$src" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \))
  local n; n=$(find "$dst" -type f | wc -l | tr -d ' ')
  echo "  $2 ($n)"
}

copy_file() {
  # copy_file <source-file> <dest-relative-path>
  local src="$SRC/$1" dst="$DST/$2"
  [ -f "$src" ] || { echo "  skip (missing file): $1"; return; }
  mkdir -p "$(dirname "$dst")"
  cp "$src" "$dst"
}

echo "== brand =="
mkdir -p "$DST/../brand"
cp "$SRC/00_General_Info/College_Logo.png" "$DST/../brand/logo.png"
copy_file "02_About_Us❗/Principals_Desk/Principal_Picture.jpg" "principal/principal.jpg"

echo "== facilities =="
copy_dir "05_Facilities/Bagh_e_Muneer" "facilities/bagh-e-muneer"
copy_dir "05_Facilities/Bio_Lab" "facilities/bio-lab"
copy_dir "05_Facilities/Chemistry_Lab" "facilities/chemistry-lab"
copy_dir "05_Facilities/Classroom" "facilities/classrooms"
copy_dir "05_Facilities/CPD_Hall" "facilities/cpd-hall"
copy_dir "05_Facilities/Equipment_Service_Science_Education_Centre" "facilities/science-education-centre"
copy_dir "05_Facilities/Fire_Safety" "facilities/fire-safety"
copy_dir "05_Facilities/First_Aid_Box" "facilities/first-aid"
copy_dir "05_Facilities/Girls_Common_Room" "facilities/girls-common-room"
copy_dir "05_Facilities/ICT_Lab" "facilities/ict-lab"
copy_dir "05_Facilities/IT_Zone" "facilities/it-zone"
copy_dir "05_Facilities/Lawns" "facilities/lawns"
copy_dir "05_Facilities/Library" "facilities/library"
copy_dir "05_Facilities/Micro_Teaching_Lab" "facilities/micro-teaching-lab"
copy_dir "05_Facilities/Parking_Area" "facilities/parking"
copy_dir "05_Facilities/Photocopy_Shop" "facilities/photocopy-shop"
copy_dir "05_Facilities/Physics_Lab" "facilities/physics-lab"
copy_dir "05_Facilities/Podcast_Studio" "facilities/podcast-studio"
copy_dir "05_Facilities/Psychological_Guidance_And_Counseling_Centre" "facilities/counseling-centre"
copy_dir "05_Facilities/Teachers__Resources_Centre" "facilities/teachers-resource-centre"
# Sports — combine the three sub-areas into one gallery (prefixed to avoid clashes).
copy_dir "05_Facilities/Sports/Sports_Ground" "facilities/sports" "ground_"
copy_dir "05_Facilities/Sports/Sports_Area" "facilities/sports" "area_"
copy_dir "05_Facilities/Sports/Sports_Arena_Room" "facilities/sports" "arena_"

echo "== events =="
copy_dir "07_Student_Life/Orientation_Day" "events/orientation-day"
copy_dir "07_Student_Life/Farewell/Farewell_2024" "events/farewell" "y2024_"
copy_dir "07_Student_Life/Farewell/Farewell_2025" "events/farewell" "y2025_"
copy_dir "07_Student_Life/Teachers_Day" "events/teachers-day"
copy_dir "07_Student_Life/Independence_Day" "events/independence-day"
copy_dir "07_Student_Life/Defence_Day" "events/defence-day"
copy_dir "07_Student_Life/Fikr_E_Iqbal" "events/iqbal-day"
copy_dir "07_Student_Life/Eid_Milad_un_nabi" "events/eid-milad"
copy_dir "07_Student_Life/Shah_Abdul_Latif_Day_Celebration" "events/shah-abdul-latif-day"
copy_dir "07_Student_Life/Plantation_Day" "events/plantation-day"
copy_dir "07_Student_Life/Picnic_Day" "events/picnic-day"
copy_dir "07_Student_Life/Rally" "events/rally"
copy_dir "07_Student_Life/Teaching_Practice" "events/teaching-practice"
copy_dir "07_Student_Life/Internal_Exams" "events/internal-exams"
copy_dir "07_Student_Life/CR_Elections" "events/cr-elections"
copy_dir "07_Student_Life/Magazine" "events/magazine"
copy_dir "07_Student_Life/Art_Exhibition" "events/art-exhibition"
copy_dir "07_Student_Life/Flower_Exhibition" "events/flower-exhibition"
copy_dir "07_Student_Life/Essay_Writing_Speech_And_Poster_Competition" "events/essay-speech-poster"
copy_dir "07_Student_Life/Sports_Week" "events/sports-week"
# Seminars
copy_dir "07_Student_Life/Seminar/Career_Councelling" "events/seminar-career-counseling"
copy_dir "07_Student_Life/Seminar/Mental_Health" "events/seminar-mental-health"
copy_dir "07_Student_Life/Seminar/Women_As_Educational_Leader" "events/seminar-women-leaders"
# Workshops
copy_dir "07_Student_Life/Workshops/Action_Research_Workshop" "events/workshop-action-research"
copy_dir "07_Student_Life/Workshops/Data_Smart_Teachers" "events/workshop-data-smart"
copy_dir "07_Student_Life/Workshops/File_Organization_And_Development_Workshop" "events/workshop-file-organization"
copy_dir "07_Student_Life/Workshops/Ilm_E_Tajweed_Workshop" "events/workshop-ilm-e-tajweed"
copy_dir "07_Student_Life/Workshops/Learning_With_AI_Workshop" "events/workshop-learning-with-ai"
copy_dir "07_Student_Life/Workshops/Micro_Teaching_Workshop" "events/workshop-micro-teaching"
copy_dir "07_Student_Life/Workshops/Practicum_Workshop" "events/workshop-practicum"
copy_dir "07_Student_Life/Workshops/Video_Editing_Workshop" "events/workshop-video-editing"
# Quizzes
copy_dir "07_Student_Life/Quizzes/Caliphs_Quiz" "events/quiz-caliphs"
copy_dir "07_Student_Life/Quizzes/History_Of_Pakistan_Military_Quiz" "events/quiz-military-history"
copy_dir "07_Student_Life/Quizzes/Jashn_E_Azadi_Quiz" "events/quiz-jashn-e-azadi"
copy_dir "07_Student_Life/Quizzes/Kashmir_Quiz" "events/quiz-kashmir"
copy_dir "07_Student_Life/Quizzes/Pakistan_Day_Quiz" "events/quiz-pakistan-day"
copy_dir "07_Student_Life/Quizzes/Quran_Quiz" "events/quiz-quran"

echo "== achievements =="
copy_dir "11_Achievements/Alumni_Success" "achievements/alumni-success"
copy_dir "11_Achievements/Maleeha_Khan" "achievements/maleeha-khan"
copy_dir "11_Achievements/Fatima_Siddiqui" "achievements/fatima-siddiqui"
copy_dir "11_Achievements/Girls_Basket_Ball_Tournament" "achievements/basketball"
copy_dir "11_Achievements/Table_Tennis" "achievements/table-tennis"
copy_dir "11_Achievements/Tug_Of_War" "achievements/tug-of-war"
copy_dir "11_Achievements/Zoology_Project" "achievements/zoology-project"
copy_dir "11_Achievements/Pakistan_Day_Quiz_2025" "achievements/pakistan-day-quiz"
copy_dir "11_Achievements/Trophies_Pictures" "achievements/trophies"

echo "== conference =="
copy_dir "07_Student_Life/Conference" "conference"

echo "== faculty (Profile_Image -> <folder>.<ext>) =="
for dept in Education_Dept Admin_Staff; do
  for dir in "$SRC/04_Faculty/$dept"/*/; do
    [ -d "$dir" ] || continue
    name=$(basename "$dir")
    img=$(find "$dir" -maxdepth 1 -type f \( -iname 'Profile_Image.*' \) | head -1)
    [ -n "$img" ] || continue
    ext="${img##*.}"
    mkdir -p "$DST/faculty"
    cp "$img" "$DST/faculty/$name.$ext"
  done
done
echo "  faculty images: $(find "$DST/faculty" -type f 2>/dev/null | wc -l | tr -d ' ')"

echo "== contributors (Profile_Image -> <folder>.<ext>) =="
for dir in "$SRC/18_Website_Contributors"/*/; do
  [ -d "$dir" ] || continue
  name=$(basename "$dir")
  img=$(find "$dir" -maxdepth 1 -type f \( -iname 'Profile_Image.*' \) | head -1)
  [ -n "$img" ] || continue
  ext="${img##*.}"
  mkdir -p "$DST/contributors"
  cp "$img" "$DST/contributors/$name.$ext"
done
echo "  contributor images: $(find "$DST/contributors" -type f 2>/dev/null | wc -l | tr -d ' ')"

echo "Done."
