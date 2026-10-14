const imageFiles = import.meta.glob('../public/images/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const equipmentDetails = [
  ['T-Bar Plate Loaded Machine.jpg', 'T-Bar Plate-Loaded Machine', 'Back & shoulders', 'Load the plates evenly and brace your chest against the pad. Pull the handles toward you without shrugging, then lower the weight slowly.'],
  ['Spin Bike.jpg', 'Spin Bike', 'Cardio & conditioning', 'Adjust the seat so your knee stays slightly bent at the bottom of each pedal stroke. Start easy, keep your hands relaxed, and build resistance gradually.'],
  ['Shoulder Press Machine.jpg', 'Shoulder Press Machine', 'Shoulders & triceps', 'Set the seat so the handles begin around shoulder height. Press upward without locking out your elbows, then return the handles with control.'],
  ['Seated Chest Press Machine.jpg', 'Seated Chest Press Machine', 'Chest & triceps', 'Set the seat so the handles line up with mid-chest. Press forward without shrugging, pause briefly, and return under control.'],
  ['Preacher Curl Bench.jpg', 'Preacher Curl Bench', 'Biceps', 'Rest your upper arms securely on the pad and use a light weight while learning the movement. Curl without swinging, then lower until your arms are nearly straight.'],
  ['Plate-Loaded Seated Row Machine.jpg', 'Plate-Loaded Seated Row', 'Back & biceps', 'Set the seat and chest support so you can reach the handles comfortably. Pull toward your torso while keeping your shoulders down, then release slowly.'],
  ['Plate-Loaded Incline Chest Press Machine.jpg', 'Plate-Loaded Incline Chest Press', 'Upper chest & triceps', 'Load both sides evenly and set the seat so the handles align with your upper chest. Press smoothly and return until you feel a controlled stretch.'],
  ['Peck Deck.jpg', 'Peck Deck', 'Chest & shoulders', 'Adjust the seat so your elbows or hands line up with mid-chest. Bring the pads together without forcing the range, then open them slowly.'],
  ['Leg Extension + Lying Leg Curl.jpg', 'Leg Extension & Lying Leg Curl', 'Quads & hamstrings', 'Align your knees with the machine pivot before starting. Extend or curl the pads smoothly, use a comfortable range, and avoid letting the weights slam.'],
  ['Lat Pulldown Machine.jpg', 'Lat Pulldown Machine', 'Back & biceps', 'Adjust the seat and thigh pad so you are secure. Pull the bar toward your upper chest while keeping your ribs down, then extend your arms smoothly.'],
  ['gymFamily.jpg', 'AR Fitness Gym', 'Gym community', 'This photo shows the AR Fitness Gym community. Ask the team at the front desk for help choosing and setting up equipment.'],
  ['Functional Trainer + Smith Machine Combo.jpg', 'Functional Trainer & Smith Machine', 'Full-body strength', 'Set the bar, cable, or attachment to a safe height. Keep your stance stable, brace your core, and start with a light load while learning the movement.'],
  ['Flat Bench Press Station.jpg', 'Flat Bench Press Station', 'Chest & triceps', 'Set the bar evenly and keep both feet planted. Lower the bar toward mid-chest with control, then press up while keeping your wrists stacked.'],
  ['Dumbbell Rack.jpg', 'Dumbbell Rack', 'Free-weight training', 'Choose a weight you can control for every rep. Keep your core braced, use a full comfortable range, and return weights carefully.'],
  ['Dip Station.jpg', 'Dip Station', 'Chest & triceps', 'Choose a controlled range that feels comfortable for your shoulders. Keep your chest lifted, lower smoothly, and press back up without swinging.'],
  ['Curved Manual Treadmill.jpg', 'Curved Manual Treadmill', 'Cardio & conditioning', 'Start at a comfortable walking pace and hold the rails only while getting on. Keep your posture tall, increase pace gradually, and slow down before stepping off.'],
];

export const gymFamilyImage = imageFiles['../public/images/gymFamily.jpg'];
export const gymFamilyImages = [
  'gymFamily.jpg',
  'gymFamily1.jpg',
  'gymFamily2.jpg',
  'gymFamily3.jpg',
  'gymFamily4.jpg',
  'gymFamily5.jpg',
  'gymFamily6.jpg',
  'gymFamily7.jpg',
].map((file) => imageFiles[`../public/images/${file}`]);

export const equipment = equipmentDetails
  .filter(([file]) => file !== 'gymFamily.jpg')
  .map(([file, name, focus, guide], index) => ({
    id: String(index + 1).padStart(2, '0'),
    file,
    name,
    focus,
    guide,
    image: imageFiles[`../public/images/${file}`],
  }));
